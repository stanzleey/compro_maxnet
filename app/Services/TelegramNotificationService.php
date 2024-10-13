<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class TelegramNotificationService
{
    protected $botToken;
    protected $chatId;

    public function __construct()
    {
        $this->botToken = config('services.telegram.7675606283:AAFK3sPwCAjkSg2RmD5jPrROhbGQRR6szwU');
        $this->chatId = config('services.telegram.2059000504');
    }

    public function sendContact($message)
    {
        $url = "https://api.telegram.org/bot{$this->botToken}/sendMessage";

        Http::post($url, [
            'chat_id' => $this->chatId,
            'text' => $message,
            'parse_mode' => 'HTML',
        ]);
    }
}
