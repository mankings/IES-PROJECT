package ies.grupo51.lockedin.auth.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import ies.grupo51.lockedin.auth.security.jwt.AuthEntryPointJwt;
import ies.grupo51.lockedin.auth.security.jwt.AuthTokenFilter;
import ies.grupo51.lockedin.auth.security.services.UserDetailsServiceImpl;

@Configuration
@EnableMethodSecurity(
		prePostEnabled = true)
public class WebSecurityConfig { 
	@Autowired
	private UserDetailsServiceImpl userDetailsService;

	@Autowired
	private AuthEntryPointJwt unauthorizedHandler;

	@Bean
	public AuthTokenFilter authenticationJwtTokenFilter() {
		return new AuthTokenFilter();
	}

	@Bean
  public DaoAuthenticationProvider authenticationProvider() {
      DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
       
      authProvider.setUserDetailsService(userDetailsService);
      authProvider.setPasswordEncoder(passwordEncoder());
   
      return authProvider;
  }

	@Bean
  public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
    return authConfig.getAuthenticationManager();
  }

	// @Bean
	// public PasswordEncoder passwordEncoder() {
	// 	return new BCryptPasswordEncoder(BCryptVersion.$2A, 10);
	// }
	
  @Bean
  public PasswordEncoder passwordEncoder() {
      return PlainTextPasswordEncoder.getInstance();
  }


	@Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.cors().and().csrf().disable()
        .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()

        .authorizeHttpRequests().requestMatchers("/api/auth/**").permitAll()
        .requestMatchers("/api/test/**").permitAll()
        
        // .anyRequest().authenticated();
        .anyRequest().permitAll();
    
    http.authenticationProvider(authenticationProvider());

    http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    
    return http.build();
  }
}