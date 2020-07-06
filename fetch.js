
const diasdaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sabado"]
const fetchDays = (ano, dia_da_semana) => {
  var planos_day = []
  var mes =  new Date().getMonth();
  for (let i_ = mes; i_ < 12; i_++) {
      var now = new Date(ano, mes);
      var data = new Date(now.getFullYear(), now.getMonth(), 0)
      let last_day = data.toString().split(' ')[2]

      if (mes != 8 && mes != 9) {

          for (let i = 1; i <= last_day; i++) {
              const _ = new Date(now.getFullYear(), now.getMonth(), i)
              var n = _.getDay()
              if (dia_da_semana == diasdaSemana[n]) {
                  planos_day.push({
                      diadasemana: diasdaSemana[n],
                      dia: i,
                      mes: mes + 1
                  })
              }
          }
      }else {
          for (let i = 1; i < last_day; i++) {
              const _ = new Date(now.getFullYear(), now.getMonth(), i)
              var n = _.getDay()
              if (dia_da_semana == diasdaSemana[n]) {
                  planos_day.push({
                      diadasemana: diasdaSemana[n],
                      dia: i,
                      mes: mes + 1
                  })
              }
          }
      }
      mes++;
  }
  return planos_day
}

//example usage:

 const g = fetchDays(hoje.getFullYear(), "quinta");
 console.log(g)
