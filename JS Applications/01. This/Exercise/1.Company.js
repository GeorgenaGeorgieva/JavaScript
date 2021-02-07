class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        if (!username || !salary || !position || !department || Number(salary) < 0) {
            throw new Error('Invalid input!');
        }

        let employee = {
            username: username,
            salary: salary,
            position: position,
            department: department
        }

        if (this.departments.filter(x => x.name === department).length > 0) {
            let currentDepartments = this.departments.filter(x => x.name === department);
            for (const dep of currentDepartments) {
                dep.employees.push(employee);
                dep.totalSalary += employee.salary;
            }
        } else {
            let newDepartment = {
                name: department,
                employees: [employee],
                totalSalary: salary,
                averageSalary() {
                    return this.totalSalary / this.employees.length;
                }
            };
            this.departments.push(newDepartment);
            return `New employee is hired. Name: ${username}. Position: ${position}`;
        }
    }

    bestDepartment() {
            let bestDepartment = this.departments.sort((a, b) => a.averageSalary - b.averageSalary)[0];
            let sortEmployees = bestDepartment.employees.sort((a, b) => b.salary - a.salary).sort((a, b) => { b.username - a.username });

            return `Best department is: ${bestDepartment.name}\nAverage salary: ${bestDepartment.averageSalary()}\n${sortEmployees.map(e => {
                            return `${e.username} ${e.salary} ${e.position}`;
                        }).join('\n')}`;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());