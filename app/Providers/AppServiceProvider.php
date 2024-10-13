<?php

namespace App\Providers;

use App;
use App\Services\TelegramNotificationService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(TelegramNotificationService::class,function($app){
            return new TelegramNotificationService();
        });
        // if (App::environment('local')) {
        //     $this->app->register(\Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class);
        // }
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
