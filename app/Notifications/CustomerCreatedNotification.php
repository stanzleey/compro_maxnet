<?php

namespace App\Notifications;

use App\Models\Customer;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\TelegramMessage;
use Illuminate\Notifications\Notification;
use NotificationChannels\Telegram\TelegramMessage as TelegramTelegramMessage;

class CustomerCreatedNotification extends Notification
{
    use Queueable;

    protected $customer;

    public function __construct(Customer $customer)
    {
        $this->customer = $customer;
    }

    public function via($notifiable)
    {
        return ['telegram'];
    }

    public function toTelegram($notifiable)
    {
        return (new TelegramTelegramMessage())
            ->content("A new customer has been created:\n\n"
                . "Name: {$this->customer->name}\n"
                . "Email: {$this->customer->email}\n"
                . "Phone: {$this->customer->phone_number}");
    }
}
