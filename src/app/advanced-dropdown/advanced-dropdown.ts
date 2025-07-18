import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-advanced-dropdown',
  imports: [FormsModule],
  templateUrl: './advanced-dropdown.html',
  styleUrl: './advanced-dropdown.css'
})
export class AdvancedDropdown {
  users = DUMMY_USERS;
  filteredUsers = DUMMY_USERS;
  searchTerm = '';
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    if (this.dropdownOpen && !this.searchTerm) {
      this.filteredUsers = this.users.slice().sort((a, b) => a.lastName.localeCompare(b.lastName));
    }

    if (!this.dropdownOpen) {
      this.filteredUsers = [];
    }
  }

  onSearch(term: string) {
    this.searchTerm = term.toLowerCase();
    this.filteredUsers = this.users.filter(user => 
      `${user.firstName} ${user.middleName} ${user.lastName} ${user.city} ${user.state} ${user.birthday}`
      .toLowerCase()
      .includes(this.searchTerm)
    ).sort((a, b) =>
      a.lastName.localeCompare(b.lastName)
    );
  }

  selectUser(user: any) {
    console.log('Selected user:', user);
    this.searchTerm = `${user.firstName} ${user.lastName}`;
    this.filteredUsers = [user]
  }
}
