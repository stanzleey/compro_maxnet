<?php

// namespace App\Notifications;

// use Illuminate\Bus\Queueable;
// use Illuminate\Notifications\Notification;
// use NotificationChannels\Telegram\TelegramMessage;

// class ContactFormNotification extends Notification
// {
//     use Queueable;

//     public $contact;

//     public function __construct($contact)
//     {
//         $this->contact = $contact;
//     }

//     /**
//      * Get the notification's delivery channels.
//      *
//      * @param  mixed  $notifiable
//      * @return array
//      */
//     public function via($notifiable)
//     {
//         return ['telegram'];
//     }

//     /**
//      * Get the Telegram representation of the notification.
//      *
//      * @param  mixed  $notifiable
//      * @return \NotificationChannels\Telegram\TelegramMessage
//      */
//     public function toTelegram($notifiable)
//     {
//         return TelegramMessage::create()
//             ->to(env('TELEGRAM_CHAT_ID')) // Chat ID for the recipient
//             ->content("New contact form submission:\n\nName: {$this->contact->name}\nEmail: {$this->contact->email}\nSubject: {$this->contact->subject}\nMessage: {$this->contact->message}");
//     }
// }
