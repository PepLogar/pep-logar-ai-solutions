<?php
declare(strict_types=1);

header('Content-Type: text/html; charset=UTF-8');
header('Cache-Control: no-store, max-age=0');
header('Referrer-Policy: no-referrer');
header('X-Content-Type-Options: nosniff');
header("Content-Security-Policy: default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'");

function contactField(string $key, int $limit, bool $multiline = false): ?string
{
    $value = $_POST[$key] ?? '';
    if (!is_string($value) || strlen($value) > 4 * $limit || preg_match('//u', $value) !== 1) {
        return null;
    }

    $value = str_replace(["\r\n", "\r"], "\n", $value);
    $forbidden = $multiline ? '/[\x00-\x08\x0B-\x1F\x7F-\x9F]/u' : '/[\x00-\x1F\x7F-\x9F]/u';
    // Browser maxlength counts UTF-16 code units, including two for each supplementary character.
    $length = preg_match_all('/./us', $value) + preg_match_all('/[\x{10000}-\x{10FFFF}]/u', $value);
    if ($length > $limit || preg_match($forbidden, $value) !== 0) {
        return null;
    }

    return trim($value);
}

$mailto = null;
$title = 'No se pudo preparar la consulta';
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    $description = 'Abre el formulario de contacto para preparar una consulta.';
} elseif (strtolower(trim(explode(';', $_SERVER['CONTENT_TYPE'] ?? '', 2)[0])) !== 'application/x-www-form-urlencoded') {
    http_response_code(415);
    $description = 'Vuelve al formulario de contacto y envíalo desde esa página.';
} else {
    $name = contactField('name', 120);
    $company = contactField('company', 160);
    $email = contactField('email', 254);
    $phone = contactField('phone', 40);
    $interest = contactField('interest', 80);
    $message = contactField('message', 2000, true);
    $interests = ['Procesos administrativos', 'Atención al cliente', 'Ventas y CRM', 'Documentos y datos', 'Software a medida', 'Aún no lo tengo claro'];

    // Matches the single-address syntax used by input[type=email], including local domains.
    $emailPattern = '/\A[a-z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*\z/i';
    if (!is_string($name) || $name === '' || $company === null || $email === null ||
        preg_match($emailPattern, $email) !== 1 || $phone === null || !in_array($interest, $interests, true) ||
        !is_string($message) || $message === '' || ($_POST['consent'] ?? null) !== 'on') {
        http_response_code(422);
        $description = 'Revisa los campos del formulario. Indica tu nombre, un correo válido, el área de interés y una descripción. Marca también la casilla de consentimiento.';
    } else {
        $body = implode("\r\n", [
            'Nombre: ' . $name,
            'Empresa: ' . ($company === '' ? 'No indicada' : $company),
            'Email: ' . $email,
            'Teléfono: ' . ($phone === '' ? 'No indicado' : $phone),
            'Área de interés: ' . $interest,
            '',
            'Proceso o necesidad:',
            str_replace("\n", "\r\n", $message),
        ]);
        $mailto = 'mailto:info@aisolutions.peplogar.com?subject=' . rawurlencode('Consulta web · ' . $interest)
            . '&body=' . rawurlencode($body);
        $title = 'Tu consulta está preparada';
        $description = 'Abre el borrador en tu aplicación de correo. Allí podrás revisarlo y enviarlo a info@aisolutions.peplogar.com.';
    }
}
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $title ?> | Pep Logar AI Solutions</title>
    <style>
        body { margin: 0; background: #faf9f5; color: #19212b; font: 1.1rem/1.55 system-ui, sans-serif; }
        main { max-width: 38rem; margin: 8vh auto; padding: 1.5rem; }
        h1 { line-height: 1.15; }
        a { color: #203c96; }
        .button { display: inline-block; padding: .65rem 1.2rem; background: #17283c; color: white; border-radius: .25rem; }
    </style>
</head>
<body>
<main>
    <h1><?= $title ?></h1>
    <p><?= $description ?></p>
    <?php if ($mailto !== null): ?>
        <p><a class="button" href="<?= htmlspecialchars($mailto, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?>">Abrir borrador</a></p>
    <?php endif; ?>
    <p><a href="/#contacto">Volver al formulario de contacto</a></p>
</main>
</body>
</html>
