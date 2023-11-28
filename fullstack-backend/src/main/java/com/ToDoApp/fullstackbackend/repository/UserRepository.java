package com.ToDoApp.fullstackbackend.repository;

import com.ToDoApp.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
