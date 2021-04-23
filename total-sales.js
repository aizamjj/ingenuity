// `totalSales` accepts one argument, an object containing an employee who manages
// a sales team, and returns the total sales for the entire team. Note: it is possible
// that any employee also manages a team.
//
// An employee looks like this:
//
// {
//   name: 'Fred Zirdung',
//   individualSales: 125,
//   leadsInProgress: 48,
//   manages: [/* ... */]
// }
//
// EXAMPLE:
//
// input: employee object - object;
// output: total sales - number;

  
var totalSales = function (salesTeam) {
  // create a new variable total and set to 0
  var total = 0;
  var team = salesTeam.manages;
  //access the individualSales of the person and add to total
  total += salesTeam.individualSales;
  // if the object has a salesTeam at Manages
  if (team.length === 0) {
    return total;
  }
  // recursion 
  // for every object within the team array
  for (var i = 0; i < team.length; i++) {
    // add output of totalSales onto current total
    total += totalSales(team[i]);
  }
  return total;
};

var salesTeam = {
  name: 'Arnaldo McDermott',
  individualSales: 14,
  leadsInProgress: 10,
  manages: [
    {
      name: 'Lavina Romaguera',
      individualSales: 15,
      leadsInProgress: 22,
      manages: [
        {
          name: 'Glen Hodkiewicz',
          individualSales: 12,
          leadsInProgress: 10,
          manages: []
        }
      ]
    },
    {
      name: 'Rey Hills',
      individualSales: 19,
      leadsInProgress: 5,
      manages: []
    }
  ]
};


console.log(totalSales(salesTeam));
// returns 60

