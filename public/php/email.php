<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require ('PHPMailer/src/Exception.php');
require ('PHPMailer/src/PHPMailer.php');
require ('PHPMailer/src/SMTP.php');

class mymailer extends PHPMailer
{
    //function that defines the settings of the smtp server. requires password and email of the sender
    public function serverSettings()
    {
        //Server settings
        // $mail->SMTPDebug = 2;  
        $this->isSMTP();                                                    //Send using SMTP
        $this->Host       = 'smtps.inherhost.it';                               //Set the SMTP server to send through, if gmail smtp.gmail.com
        $this->SMTPAuth   = true;                                           //Enable SMTP authentication
        $this->Username   = 'info@lauralavorini.com';                       //SMTP username of the sender
        $this->Password   = '11ess9S10ore';                              //SMTP password of the sender
        //$this->SMTPSecure = 'ssl';
        $this->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;                 //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $this->Port       = 465;                                            //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    }

    //function that sets the recipients of the mail. You can add as many users as you want
    public function setRecipients($data)
    {   
        //Recipients
        $this->setFrom ($data["email"]["Email"]);                     //from
        $this->addAddress ('info@lauralavorini.com');                    //to
        $this->addReplyTo ($data["email"]["Email"]);                  //reply to
    }

    //function that sets the content of the email. in order, Title, body in html and body as plain text.
    public function setContent($data)
    {
        //Content
        $this->isHTML(true);                                                        //Set email format to HTML
        $this->Subject = 'Sito Curriculum inviata da ' . $data["email"]["Nome"];                                       //subject of the mail
        $this->Body    = nl2br($data["email"]["Content"] . "\r\n Inviata da: " . $data["email"]["Email"]);    //body of the mail, it uses html tags 
    }

    //main function
    public function sendEmail($data)
    {
        try
        {
            echo "Messaggio inviato.";
            $mail=new mymailer(true);                                               //new istance of mymailer obj
            $mail->serverSettings();
            $mail->setRecipients($data);
            $mail->setContent($data);
            $mail->send();
            $mail->SmtpClose();
            unset($mail);
        }
        catch(Exception $e)
        {
            echo "Messaggio non inviato. Mailer Error: {$mail->ErrorInfo}";
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Processa i dati del form
    $response = ['status' => 'success', 'message' => 'Form submitted successfully'];
    header('Content-Type: application/json');
    echo json_encode($response);

    $data=file_get_contents("php://input");
    $data= json_decode($data, true);
    $mail=new mymailer(true);
    $mail->sendEmail($data);
    exit;
}

?>
