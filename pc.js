google.charts.load('current', {'packages':['corechart']});

      google.charts.setOnLoadCallback(drawAge);

      google.charts.setOnLoadCallback(drawSex);

      google.charts.setOnLoadCallback(drawAddress);

      google.charts.setOnLoadCallback(drawq1);

      google.charts.setOnLoadCallback(drawq2);

      google.charts.setOnLoadCallback(drawq3);

      google.charts.setOnLoadCallback(drawq4);

      google.charts.setOnLoadCallback(drawq5);

      function drawAge() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Sub 40 ani', 38],
          ['Peste 40 ani', 62]
        ]);

        var options = {
                       width:500,
                       height:400};

        var chart = new google.visualization.PieChart(document.getElementById('Age_chart_div'));
        chart.draw(data, options);
      }

      function drawSex() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['', 0],	
          ['Masculin', 33],
          ['Feminin', 67]
        ]);

        var options = {
                       width:500,
                       height:400,
                   };

        var chart = new google.visualization.PieChart(document.getElementById('Sex_chart_div'));
        chart.draw(data, options);
      }

      function drawAddress() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['', 0],
          ['', 0],
          ['Rural', 19],
          ['Urban', 81]
        ]);

        var options = {
                       width:500,
                       height:400,
                   };

        var chart = new google.visualization.PieChart(document.getElementById('Address_chart_div'));
        chart.draw(data, options);
      }

      function drawq1() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 0],
          ['Onions', 0],
          ['Olives', 0],
          ['Da', 52],
          ['Nu', 48]
        ]);

        var options = {
                       width:500,
                       height:400,
                   };

        var chart = new google.visualization.PieChart(document.getElementById('q1_chart_div'));
        chart.draw(data, options);
      }

      function drawq2() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 0],
          ['Onions', 0],
          ['Olives', 0],
          ['Zucchini', 0],
          ['Mult', 66],
          ['Puțin', 33],
          ['Deloc', 1]
        ]);

        var options = {
                       width:500,
                       height:400,
                   };

        var chart = new google.visualization.PieChart(document.getElementById('q2_chart_div'));
        chart.draw(data, options);
      }

      function drawq3() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 0],
          ['Onions', 0],
          ['Olives', 0],
          ['Zucchini', 0],
          ['Pepperoni', 0],
          ['Ambulatoriu', 35],
          ['Cabinete private', 65]
        ]);

        var options = {
                       width:500,
                       height:400,
                   };

        var chart = new google.visualization.PieChart(document.getElementById('q3_chart_div'));
        chart.draw(data, options);
      }

      function drawq4() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Întotdeauna', 25],
          ['Uneori', 70],
          ['Niciodată', 5]
        ]);

        var options = {
                       width:500,
                       height:400,
                   };

        var chart = new google.visualization.PieChart(document.getElementById('q4_chart_div'));
        chart.draw(data, options);
      }

      function drawq5() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 0],
          ['Onions', 0],
          ['Da', 65],
          ['Nu', 15],
          ['Nu știu', 20]
        ]);

        var options = {
                       width:500,
                       height:400,
                   };

        var chart = new google.visualization.PieChart(document.getElementById('q5_chart_div'));
        chart.draw(data, options);
      }