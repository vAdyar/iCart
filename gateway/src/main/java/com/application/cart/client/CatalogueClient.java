package com.application.cart.client;

import com.application.cart.domain.Product;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name="catalogue", configuration = OAuth2InterceptedFeignConfiguration.class, fallback = CatalogueClientFallback.class)
public interface CatalogueClient {

    @PostMapping("/api/products/")
    Product createProduct(@RequestBody Product product);

    @PutMapping("/api/products/")
    Product updateProduct(@RequestBody Product product);

    @GetMapping( value = "/api/products/")
    List<Product> products(Pageable pageable);

    @GetMapping( value = "/api/products/{productId}")
    Product getProduct(@PathVariable("productId") Long id);

    @DeleteMapping(value = "/api/products/{productId}")
    void deleteProduct(@PathVariable("productId") Long id);
}
