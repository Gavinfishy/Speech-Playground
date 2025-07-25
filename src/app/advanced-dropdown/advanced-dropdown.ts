import { Component } from '@angular/core';
import { DUMMY_USERS } from '../local-data-pool';
import { FormsModule } from '@angular/forms';
import { FillForm } from '../services/fill-form';
import { US_STATES } from '../local-data-pool';

@Component({
  selector: 'app-advanced-dropdown',
  imports: [FormsModule],
  templateUrl: './advanced-dropdown.html',
  styleUrl: './advanced-dropdown.css'
})
export class AdvancedDropdown {
  users = DUMMY_USERS;
  filteredUsers = DUMMY_USERS;
  states = US_STATES;
  searchTerm = '';
  dropdownOpen = false;

  filters = {
    firstName: '',
    middleName: '',
    lastName: '',
    birthday: '',
    city: '',
    state: ''
  };

  constructor (private fillForm: FillForm) {
    this.fillForm.fieldUpdate$.subscribe(update => {
      if (!update) return;

      const { field, value } = update;

      if (field === 'filter.searchTerm') {
        this.searchTerm = value;
        this.onSearch(value);
        this.dropdownOpen = true;
      } else if (field.startsWith('filter.')) {
        const filterKey = field.replace('filter.', '') as keyof typeof this.filters;
        if (filterKey === 'state') {
          const term = value.trim().toLowerCase();
          const matched = this.states.find(s => s.name.toLowerCase() === term ||
          s.abbreviation.toLowerCase() === term
          );
          this.filters.state = matched ? matched.abbreviation : value.toUpperCase();
        } else if (filterKey in this.filters) {
          this.filters[filterKey] = value;
        }
        this.applyFilters();
        this.dropdownOpen = true;
      }
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;

    if (this.dropdownOpen) {
      this.applyFilters();
    } else {
      this.filteredUsers = [];
    }
  }

  openPanel() {
    this.dropdownOpen = true;
    this.applyFilters();
  }

  applyFilters() {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      (!term || `${user.firstName} ${user.middleName} ${user.lastName} ${user.city} ${user.state}`
      .toLowerCase().includes(term)) &&
      (!this.filters.firstName || user.firstName.toLowerCase().includes(this.filters.firstName.toLowerCase())) &&
      (!this.filters.middleName || user.middleName.toLowerCase().includes(this.filters.middleName.toLowerCase())) &&
      (!this.filters.lastName || user.lastName.toLowerCase().includes(this.filters.lastName.toLowerCase())) &&
      (!this.filters.birthday || user.birthday.toLowerCase().includes(this.filters.birthday.toLowerCase())) &&
      (!this.filters.city || user.city.toLowerCase().includes(this.filters.city.toLowerCase())) &&
      (!this.filters.state || user.state.toLowerCase().includes(this.filters.state.toLowerCase()))
    ).sort((a, b) => a.lastName.localeCompare(b.lastName));
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
    this.searchTerm = `${user.firstName} ${user.lastName}`;
    this.filteredUsers = [user]
  }
}
