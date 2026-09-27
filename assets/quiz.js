// Componente de prática com feedback imediato, reutilizado por todas as lições.
//
// Múltipla escolha:
//   <div class="quiz" data-answer="b">
//     <p class="q">Pergunta</p>
//     <div class="opts">
//       <button data-opt="a" data-why="Explicação do erro">…</button>
//       <button data-opt="b" data-why="Explicação do acerto">…</button>
//     </div>
//     <p class="fb"></p>
//   </div>
//
// Resposta numérica (aceita vírgula ou ponto):
//   <div class="num" data-answer="12.64" data-tol="0.01" data-hint="Dica se errar">
//     <p class="q">Pergunta</p>
//     <div class="row"><input inputmode="decimal"><button>Conferir</button></div>
//     <p class="fb"></p>
//   </div>

(function () {
  function parse(v) {
    v = String(v).trim().replace(/\s/g, "").replace(/%$/, "").replace(/[−–]/g, "-");
    // "1.500,25" -> 1500.25 ; "12,64" -> 12.64 ; "12.64" -> 12.64
    if (v.includes(",")) v = v.replace(/\./g, "").replace(",", ".");
    // "1.500" ou "10.500" -> milhar no padrão brasileiro
    else if (/^\d{1,3}(\.\d{3})+$/.test(v)) v = v.replace(/\./g, "");
    return parseFloat(v);
  }

  function fmt(n) {
    return Number(n).toLocaleString("pt-BR", { maximumFractionDigits: 2 });
  }

  document.querySelectorAll(".quiz").forEach(function (box) {
    var fb = box.querySelector(".fb");
    box.querySelectorAll("button[data-opt]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var right = btn.dataset.opt === box.dataset.answer;
        box.querySelectorAll("button[data-opt]").forEach(function (b) {
          b.classList.remove("right", "wrong");
        });
        btn.classList.add(right ? "right" : "wrong");
        fb.className = "fb " + (right ? "ok" : "no");
        fb.textContent = (right ? "✔ Correto. " : "✘ Ainda não. ") + (btn.dataset.why || "");
      });
    });
  });

  document.querySelectorAll(".num").forEach(function (box) {
    var input = box.querySelector("input");
    var fb = box.querySelector(".fb");
    var answer = parseFloat(box.dataset.answer);
    var tol = parseFloat(box.dataset.tol || "0.01");

    function check() {
      var got = parse(input.value);
      if (isNaN(got)) {
        fb.className = "fb no";
        fb.textContent = "Digite um número.";
        return;
      }
      var right = Math.abs(got - answer) <= tol;
      fb.className = "fb " + (right ? "ok" : "no");
      fb.textContent = right
        ? "✔ Correto: " + fmt(answer) + ". " + (box.dataset.why || "")
        : "✘ Ainda não. " + (box.dataset.hint || "Refaça a conta com calma.");
    }

    box.querySelector("button").addEventListener("click", check);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") check();
    });
  });
})();
