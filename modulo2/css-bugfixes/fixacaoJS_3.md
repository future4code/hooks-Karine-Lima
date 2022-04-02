ˋˋˋfunction calculaNota(ex, p1, p2) {
  let media = (ex*1 + p1*2 + p2*3)/6
  let conceito 
  if (media>=9){
    conceito="A"
    }
    else if (9>media && media>=7.5){
      conceito="B"
    }
    else if (7.5>media && media>=6){
      conceito="C"
    }
    else if (media<6){
      conceito="D"
    }
    return conceito
  }ˋˋˋ
  