# A simple EMS made with JS and node
<br><img src="./ems.png" height="150px" width=auto> 

## 🚀 Future Enhancements

### 📋 Core Improvements
- [ ] **Input Validation** – Add checks for empty fields, valid salary numbers, and prevent duplicate employee names
- [ ] **Confirm Before Delete** – Ask "Are you sure?" before permanently removing an employee
- [ ] **Better Display Format** – Use `console.table()` for cleaner employee listings
- [ ] **Search by Name** – Add case-insensitive partial name matching

### 💾 Data Persistence
- [ ] **Save to File** – Persist employee data to a JSON file
- [ ] **Load from File** – Automatically load saved data on startup
- [ ] **Export to CSV** – Generate CSV files for Excel/Spreadsheets
- [ ] **Import from CSV** – Bulk add employees from external files

### 📊 Analytics & Reporting
- [ ] **Statistics Dashboard**
  - Total employee count
  - Average salary
  - Highest/Lowest paid employees
  - Department-wise distribution
- [ ] **Sort Employees** – Sort by name, salary, or ID (ascending/descending)
- [ ] **Filter Options** – Filter by department, salary range, or position

### 🔧 Advanced Features
- [ ] **Update Specific Fields** – Choose which field to update instead of all
- [ ] **Bulk Operations** – Apply percentage raises to all or filtered employees
- [ ] **Undo/Redo** – History tracking to revert changes
- [ ] **Role-Based Access** – Admin vs. employee permissions
- [ ] **Department Management** – Organize employees into departments

### 🎨 User Experience
- [ ] **Colorful Output** – Use `chalk` or `colors` for better visual feedback
- [ ] **Clear Screen** – Clean menu between operations
- [ ] **Keyboard Shortcuts** – Quick navigation (e.g., 'q' to quit)
- [ ] **Progress Indicators** – Spinners for long operations

### 🏗️ Technical Debt
- [ ] **Modular Code** – Split into separate files (employee.js, menu.js, fileHandler.js)
- [ ] **Error Handling** – Try/catch blocks for file operations
- [ ] **Configuration File** – Customizable settings (starting ID, default values)
- [ ] **Unit Tests** – Add tests for core functions
