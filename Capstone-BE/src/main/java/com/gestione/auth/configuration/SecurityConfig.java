package com.gestione.auth.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.gestione.auth.security.JwtAuthenticationEntryPoint;
import com.gestione.auth.security.JwtAuthenticationFilter;

@Configuration
@EnableMethodSecurity
public class SecurityConfig {

    private UserDetailsService userDetailsService;

    private JwtAuthenticationEntryPoint authenticationEntryPoint;

    private JwtAuthenticationFilter authenticationFilter;

    public SecurityConfig(UserDetailsService userDetailsService, JwtAuthenticationEntryPoint authenticationEntryPoint,
	    JwtAuthenticationFilter authenticationFilter) {
	this.userDetailsService = userDetailsService;
	this.authenticationEntryPoint = authenticationEntryPoint;
	this.authenticationFilter = authenticationFilter;
    }

    @Bean
    public static PasswordEncoder passwordEncoder() {
	return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
	return configuration.getAuthenticationManager();
    }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
	http.cors().and().csrf().disable()
		.authorizeHttpRequests(
			(authorize) -> authorize
			.requestMatchers(HttpMethod.POST, "/api/auth/**").permitAll()
			.requestMatchers(HttpMethod.GET, "/api/articolo").permitAll()
			.requestMatchers(HttpMethod.GET, "/api/carrello", "/api/azienda", "/api/fattura", "/api/ordine", "/api/user").hasAnyRole("USER", "ADMIN")
			.requestMatchers(HttpMethod.POST, "/api/carrello").hasAnyRole("USER", "ADMIN")
			.requestMatchers(HttpMethod.PUT, "/api/ordine", "/api/user").hasAnyRole("USER", "ADMIN")
			.requestMatchers(HttpMethod.DELETE, "/api/carrello", "/api/user").hasAnyRole("USER", "ADMIN")
			.requestMatchers(HttpMethod.POST, "/api/articolo", "/api/azienda", "/api/fattura","/api/ordine").hasRole("ADMIN")
			.requestMatchers(HttpMethod.PUT, "/api/articolo","/api/azienda", "/api/fattura").hasRole("ADMIN")
			.requestMatchers(HttpMethod.DELETE, "/api/articolo", "/api/azienda", "/api/fattura", "/api/ordine").hasRole("ADMIN")
			.anyRequest().authenticated())
		.exceptionHandling(exception -> exception.authenticationEntryPoint(authenticationEntryPoint))
		.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

	http.addFilterBefore(authenticationFilter, UsernamePasswordAuthenticationFilter.class);

	return http.build();
    }
}
