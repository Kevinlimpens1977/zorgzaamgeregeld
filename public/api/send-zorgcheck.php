<?php
header('Content-Type: application/json');

// Enable error reporting for debugging (disable in production if preferred)
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Get POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data || !isset($data['email'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Geen valide data of email adres ontvangen.', 'received' => $data]);
    exit;
}

$to = $data['email'];
$profile = $data['profile'];
$paragraphs = $data['paragraphs'];
$bullets = $data['bullets'];
$closing = $data['closing'];

// SMTP Settings
$smtp_host = 'smtp.transip.email';
$smtp_port = 465;
$smtp_user = 'info@zorgzaamgeregeld.nl';
$smtp_pass = 'DaTaRu2025!!'; // Provided by user
$sender_name = 'Zorgzaam Geregeld';

// Email Content
$subject = "Persoonlijke zorgcheck uitslag";

$message = "<html><body style='font-family: Arial, sans-serif; color: #4A4A4A; line-height: 1.6;'>";
$message .= "<h1 style='color: #2F2F2F;'>Jouw persoonlijke zorgcheck uitslag</h1>";
$message .= "<h2 style='color: #A07F5A;'>• " . htmlspecialchars($profile) . "</h2>";

foreach ($paragraphs as $para) {
    $message .= "<p>" . htmlspecialchars($para) . "</p>";
}

$message .= "<div style='background-color: #F7F4F2; padding: 20px; border-radius: 8px; margin: 20px 0;'>";
$message .= "<h4 style='margin-top: 0; color: #2F2F2F;'>Waar je vooral op vastloopt:</h4><ul>";
foreach ($bullets as $bullet) {
    $message .= "<li>" . htmlspecialchars($bullet) . "</li>";
}
$message .= "</ul></div>";

$message .= "<p><i>" . htmlspecialchars($closing) . "</i></p>";

$message .= "<hr style='border: 0; border-top: 1px solid #EDE7E3; margin: 30px 0;'>";
$message .= "<p style='font-size: 0.9em;'>Met vriendelijke groet,<br><strong>Danielle - Zorgzaam Geregeld</strong><br>";
$message .= "Website: <a href='https://zorgzaamgeregeld.nl'>www.zorgzaamgeregeld.nl</a><br>";
$message .= "E-mail: <a href='mailto:info@zorgzaamgeregeld.nl'>info@zorgzaamgeregeld.nl</a></p>";
$message .= "<p style='font-size: 0.8em; color: #888;'>Je kunt direct op deze mail reageren als je vragen hebt.</p>";
$message .= "</body></html>";

// PHPMailer logic
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Look for PHPMailer in several common locations
$paths = [
    '../vendor/autoload.php', // Composer standard
    './vendor/autoload.php',
    '../vendor/phpmailer/phpmailer/src/PHPMailer.php',
    './PHPMailer/src/PHPMailer.php',
    './api/PHPMailer/src/PHPMailer.php'
];

$found = false;
foreach ($paths as $path) {
    if (file_exists($path)) {
        if (strpos($path, 'autoload.php') !== false) {
            require $path;
        } else {
            $base = dirname($path) . '/';
            require $base . 'Exception.php';
            require $base . 'PHPMailer.php';
            require $base . 'SMTP.php';
        }
        $found = true;
        break;
    }
}

if ($found) {
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host = $smtp_host;
        $mail->SMTPAuth = true;
        $mail->Username = $smtp_user;
        $mail->Password = $smtp_pass;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = $smtp_port;
        $mail->CharSet = 'UTF-8';

        //Recipients
        $mail->setFrom($smtp_user, $sender_name);
        $mail->addAddress($to);
        $mail->addReplyTo($smtp_user, $sender_name);

        //Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $message;
        $mail->AltBody = strip_tags(str_replace(['<p>', '</p>', '<li>'], ["\n", "\n", "\n- "], $message));

        $mail->send();
        echo json_encode(['success' => true]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => "Mail kon niet worden verzonden. Mailer Error: {$mail->ErrorInfo}"]);
    }
} else {
    // Fallback if PHPMailer is missing
    http_response_code(500);
    echo json_encode([
        'error' => 'PHPMailer bibliotheek niet gevonden op de server.',
        'checked_paths' => $paths,
        'advice' => 'Upload de PHPMailer bibliotheek naar een van de bovenstaande locaties.'
    ]);
}
