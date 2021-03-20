let piece = "TOWER";

switch(piece.toLowerCase()){
  case "king":
    console.log("Qualquer direção, uma casa por vez");
    break;
  case "queen":
    console.log("Qualquer direção, quantas casas quiser");
    break;
  case "tower":
    console.log("Vertical ou Horizontal");
    break;
  case "bishop":
    console.log("Diagonal");
    break;
  case "horse":
    console.log("em L");
    break;
    case "pawn":
    console.log("Uma casa para frente, na primeira jogada podem ser duas.");
    break;
  default:
    console.log("Error. Peça inválida.")
} 