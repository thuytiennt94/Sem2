<?php

namespace App\Repositories\Product;

use App\Models\Product;
use App\Repositories\BaseRepositories;
use App\Service\Product\ProductServiceInterface;


class ProductService extends BaseRepositories implements ProductServiceInterface
{
    public function getModel()
    {
        return Product::class;
    }

    /*public $repository;

    public function __construct(ProductRepositoryInterface $productRepository)
    {
        $this->repository = $productRepository;
    }*/
}
