package com.gestione.auth.service;

import com.gestione.auth.payload.LoginDto;
import com.gestione.auth.payload.RegisterDto;

public interface AuthService {

    String login(LoginDto loginDto);

    String register(RegisterDto registerDto);

}
