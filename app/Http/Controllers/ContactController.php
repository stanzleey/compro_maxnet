<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Services\TelegramNotificationService;
class ContactController extends Controller
{
    protected $telegramNotificatioService;
    public function __construct(TelegramNotificationService $telegramNotificatioService)
    {
        $this-> telegramNotificatioService = $telegramNotificatioService;
    }
    public function index()
    {
        $contacts = Contact::all();
        return Inertia::render('Contact/Index', [
            'contacts' => $contacts,
        ]);
    }
    
public function show($id)
{
    $contact = Contact::findOrFail($id);
    return inertia('Contact/Show', [
        'contact' => $contact
    ]);
}

    // public function create()
    // {
    //     return Inertia::render('Contacts/Create');
    // }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);
        $contact = Contact::create($request->all());

        // Send a Telegram notification
        // Notification::route('telegram', '2059000504')
        //     ->notify(new CustomerCreatedNotification($customer));
        $this->sendTelegramNotification($contact);
        return redirect()->route('contacts.index')->with('success', 'Customer created successfully.');
    }
    protected function sendTelegramNotification($contact)
    {
        $token = '7675606283:AAFK3sPwCAjkSg2RmD5jPrROhbGQRR6szwU';
        $chat_id = '2059000504';
        $message = "New contact created: " . $contact->name;
    
        $url = "https://api.telegram.org/bot{$token}/sendMessage";
    
        $params = [
            'chat_id' => $chat_id,
            'text' => $message,
        ];
    
        file_get_contents($url . '?' . http_build_query($params));
    }
    // public function edit(Contact $contact)
    // {
    //     return Inertia::render('Contact/Edit', [
    //         'contact' => $contact,
    //     ]);
    // }

    public function update(Request $request, Contact $contact)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        $contact->update($request->all());

        return redirect()->route('contacts.index');
    }

   public function destroy(Contact $contact)
    {
        $contact->delete();
        return redirect()->route('contacts.index');
    }

}
