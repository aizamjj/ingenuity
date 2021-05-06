const totalSum = require('./total-sales')

test('returns total when there is one employee', () => {
  expect(totalSum({
    name: 'Juni Chen',
    individualSales: 20,
    leadsInProgress: 10,
    manages: []
  })).toBe(20);
})
test('returns total', () => {
  const salesTeam = {
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
  }
  expect(totalSum(salesTeam)).toBe(60);
})
test('returns total', () => {
  const salesTeam = {
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
        manages: [
          {
            name: 'Lavina Romaguera',
            individualSales: 0,
            leadsInProgress: 22,
            manages: [
              {
                name: 'Glen Hodkiewicz',
                individualSales: 0,
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
      }
    ]
  }
  expect(totalSum(salesTeam)).toBe(106);
})
