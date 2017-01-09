```js


{
  currentUser: {
    id: 1,
    username: User1
  },

  forms: {
    auth: {errors: ["password too short"]},
    createChart: {errors: "No X-axis variable selected"}
    upload: {errors: "Data Type not recognized"}
    editDash: {errors: "Title can't be blank"}
    share: {errors: username does not exist}
  },

  data: {
    1: { "Students": [
      {"Name": "Abe", "Score": 82},
      {"Name": "Beth", "Score": 94},
      {"Name": "Carl", "Score": 51}
      ]}
    },
    6: { "Teachers": [
      {"Name": "Andrea", "Salary": 49000, "Sick Days": 13},
      {"Name": "Bob", "Salary": 46000, "Sick Days": 2},
      {"Name": "Cassandra", "Salary": 36000, "Sick Days": 21}
      ]}
    }
  },

  charts: {
    1: {
      owner: "Principal",
      access: ["Andrea", "Bob", "Cassandra"],
      data_id: 6,
      type: "Scatter",
      title: "Salary vs. Sick Days",
      x-axis: "Sick Days",
      y-axis: {
        1: "Salary"
      }
    }
  },

  dashboards: {
    1: {
      owner: "Principal",
      access: ["Andrea", "Bob", "Cassandra"],
      title: "Teachers HR Data",
      charts: [1]
    }
  },


}

```
