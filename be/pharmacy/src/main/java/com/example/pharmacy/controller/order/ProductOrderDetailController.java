package com.example.pharmacy.controller.order;

import com.example.pharmacy.dto.order.ProductOrderDetailDTO;
import com.example.pharmacy.service.order.IProductOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/order-detail")
@CrossOrigin("*")
public class ProductOrderDetailController {
    @Autowired
    private IProductOrderDetailService orderDetailService;
    @GetMapping("")
    public ResponseEntity<List<ProductOrderDetailDTO>> listAll() {
        List<ProductOrderDetailDTO> productOrderDetailDTOS = orderDetailService.findAll();
        if (productOrderDetailDTOS.isEmpty()) {
            return new ResponseEntity<>(productOrderDetailDTOS, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productOrderDetailDTOS, HttpStatus.OK);
    }

    @GetMapping("/list/{idUser}")
    public ResponseEntity<Page<ProductOrderDetailDTO>> listTotalAll(
            @PageableDefault(sort = {"id"}, direction = Sort.Direction.DESC,size = 6) Pageable pageable,
            @PathVariable Integer idUser) {
        Page<ProductOrderDetailDTO> productOrderDetailDTOS = orderDetailService.findTotalAll(idUser,pageable);
        if (productOrderDetailDTOS.isEmpty()) {
            return new ResponseEntity<> (productOrderDetailDTOS, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(productOrderDetailDTOS, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> createInvoiceDetail(@Valid @RequestBody ProductOrderDetailDTO productOrderDetailDTO,
                                                 BindingResult bindingResult) {
        if (!bindingResult.hasErrors()) {
            String msg = orderDetailService.save(productOrderDetailDTO);
            if (!msg.equals("")) {
                return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
            } else {
                return new ResponseEntity<>(HttpStatus.CREATED);
            }
        } else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> errors = bindingResult.getFieldErrors();
            for (FieldError error : errors) {
                if (!map.containsKey(error.getField())) {
                    map.put(error.getField(), error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map,  HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        if (id == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        orderDetailService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}/{quantity}")
    public ResponseEntity<?> update(@PathVariable Integer id, @PathVariable Integer quantity) {
        if (id == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        String msg = orderDetailService.update(id, quantity);
        if (!msg.equals("")) {
            return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
