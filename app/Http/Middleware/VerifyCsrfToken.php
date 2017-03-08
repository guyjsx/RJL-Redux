<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;

class VerifyCsrfToken extends BaseVerifier
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        //
    ];

    /**
     * Determine if the session and input CSRF tokens match.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return bool
     */
    protected function tokensMatch($request)
    {
        $sessionToken = $request->session()->token();

        $token = $request->input('_token') ? $request->input('_token') : "";

        if (! $token && $header = $request->header('X-CSRF-TOKEN')) {
            $token = $this->encrypter->decrypt($header);
        }

        if (! is_string($sessionToken) || ! is_string($token)) {
            return false;
        }

        return hash_equals((string) $request->session()->token(), (string) $token);
    }
}
