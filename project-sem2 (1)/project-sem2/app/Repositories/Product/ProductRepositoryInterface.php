<?php

namespace App\Repositories\Product;

use App\Repositories\RepositoryInterface;

interface ProductRepositoryInterface extends RepositoryInterface
{
    public function getProductOnIndex($request);

    public function getProductsByCategory($categoryName, $request);
}
