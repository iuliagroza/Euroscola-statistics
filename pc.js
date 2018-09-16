google.charts.load('current', {'packages':['corechart']});

      google.charts.setOnLoadCallback(drawq1);

      google.charts.setOnLoadCallback(drawq2);

      google.charts.setOnLoadCallback(drawq3);

      google.charts.setOnLoadCallback(drawq4);

      google.charts.setOnLoadCallback(drawq5);

      google.charts.setOnLoadCallback(drawm1);

      google.charts.setOnLoadCallback(drawm3);

      google.charts.setOnLoadCallback(drawm5);

      google.charts.setOnLoadCallback(draws1);

      google.charts.setOnLoadCallback(draws2);

      google.charts.setOnLoadCallback(draws31);

      google.charts.setOnLoadCallback(draws32);

      google.charts.setOnLoadCallback(draws5);

      function draws1() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Olives', 0],
          ['Olives', 0],
          ['Olives', 0],
          ['Olives', 0],
          ['Sub 40 ani', 30],
          ['Peste 40 ani', 70]
        ]);

        var options = {
                       title:'În funcție de vârstă',
                       width:420,
                       height:320,
                   };

        var chart = new google.visualization.PieChart(document.getElementById('s1_chart_div'));
        chart.draw(data, options);
      }

      function draws2() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Olives', 0],
          ['Olives', 0],
          ['Sub 40 ani', 46],
          ['Peste 40 ani', 54]
        ]);

        var options = {
                       title:'În funcție de vârstă',
                       width:420,
                       height:320,
                   };

        var chart = new google.visualization.PieChart(document.getElementById('s2_chart_div'));
        chart.draw(data, options);
      }

      function draws31() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Olives', 0],
          ['Sub 40 ani', 38],
          ['Peste 40 ani', 62]
        ]);

        var options = {
                       title:'În funcție de vârstă - ambulatoriu',
                       width:420,
                       height:320,
                   };

        var chart = new google.visualization.PieChart(document.getElementById('s31_chart_div'));
        chart.draw(data, options);
      }

      function draws32() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Olives', 0],
          ['Olives', 0],
          ['Olives', 0],
          ['Olives', 0],
          ['Sub 40 ani', 63],
          ['Peste 40 ani', 37]
        ]);

        var options = {
                       title:'În funcție de vârstă - cabinete private',
                       width:420,
                       height:320,
                   };

        var chart = new google.visualization.PieChart(document.getElementById('s32_chart_div'));
        chart.draw(data, options);
      }

      function draws5() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Sub 40 ani', 65],
          ['Peste 40 ani', 35]
        ]);

        var options = {
                       title:'În funcție de vârstă',
                       width:420,
                       height:320,
                   };

        var chart = new google.visualization.PieChart(document.getElementById('s5_chart_div'));
        chart.draw(data, options);
      }

      function drawm1() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Olives', 0],
          ['Urban', 58],
          ['Rural', 42],
        ]);

        var options = {
                       title:'În funcție de domiciliu',
                       width:420,
                       height:320,
                   };

        var chart = new google.visualization.PieChart(document.getElementById('m1_chart_div'));
        chart.draw(data, options);
      }


      function drawm3() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Olives', 0],
          ['Rural', 0],
          ['Urban', 54],
          ['Rural', 46]
        ]);

        var options = {
                       title:'În funcție de domiciliu',
                       width:420,
                       height:320,
                   };

        var chart = new google.visualization.PieChart(document.getElementById('m3_chart_div'));
        chart.draw(data, options);
      }

      function drawm5() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Olives', 0],
          ['Urban', 64],
          ['Rural', 36],
          ['Rural', 0]
        ]);

        var options = {
                       title:'În funcție de domiciliu',
                       width:420,
                       height:320,
                   };

        var chart = new google.visualization.PieChart(document.getElementById('m5_chart_div'));
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
                       title: 'Total',
                       width:420,
                       height:320,
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
                       title: 'Total',
                       width:420,
                       height:320,
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
                       title: 'Total',
                       width:420,
                       height:320,
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
                       title: 'Total',
                       width:420,
                       height:320,
                   };

        var chart = new google.visualization.PieChart(document.getElementById('q5_chart_div'));
        chart.draw(data, options);
      }
