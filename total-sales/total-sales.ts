interface Employee {
  name: string;
  individualSales: number;
  leadsInProgress: number;
  manages: Employee[];
}
  
function findTotalSales(employee: Employee, total: number=0): number {
  if(employee?.manages) {
    for (const e of employee.manages) {
      return findTotalSales(e, employee.individualSales + total)
    }
  }
  return total;
};

module.exports = findTotalSales;
