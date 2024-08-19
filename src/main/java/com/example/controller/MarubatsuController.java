package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MarubatsuController {

	@GetMapping("/Marubatsu")
	public String getMarubatsu() {
		
		return "html/marubatsu";
	}
	
}
