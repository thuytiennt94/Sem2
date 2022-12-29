<?php

namespace App\Service;

abstract class BaseService implements ServiceInterface
{
    protected $reponsitory;

    abstract public function getModel();

    public function all()
    {
        return $this->reponsitory->all();
    }

    public function find(int $id)
    {
        return $this->reponsitory->findOrFail($id);
    }

    public function create(array $data)
    {
        return $this->reponsitory->create($data);
    }

    public function update(array $data, $id)
    {
        return  $this->reponsitory->update($id, $data);
    }

    public function delete($id)
    {
        return $this->reponsitory->delete($id);

    }
}
