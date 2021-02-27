package com.application.cart.client;

import com.application.cart.domain.Product;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CatalogueClientFallback implements CatalogueClient {

    @Override
    public Product createProduct(Product product) {
        return new Product();
    }

    @Override
    public Product updateProduct(Product product) {
        return new Product();
    }

    @Override
    public List<Product> products(Pageable pageable) {
        return new ArrayList<Product>();
    }

    @Override
    public Product getProduct(Long id) {
        return new Product();
    }

    @Override
    public void deleteProduct(Long id) {
    }
}
