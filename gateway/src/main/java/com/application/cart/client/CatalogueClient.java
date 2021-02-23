package com.application.cart.client;

import com.application.cart.domain.Product;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@FeignClient(name="catalogue", configuration = OAuth2InterceptedFeignConfiguration.class)
public interface CatalogueClient {

    @RequestMapping(method = RequestMethod.GET, value = "/api/products/")
    List<Product> products(Pageable pageable);
}
