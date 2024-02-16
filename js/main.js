$(document).ready(function() {
    $('#calcularBtn').click(function() {

      $('.alert').remove();
  
      var productos = $('.producto');
      var subtotal = 0;
      for (var i = 0; i < productos.length; i++) {
        var valor = $(productos[i]).val();
        if (valor === '' || isNaN(valor)) {
          $(productos[i]).after('<div class="alert alert-danger">Ingrese un número válido.</div>');
          return;
        }
        subtotal += parseFloat(valor);
      }
  
    
      var descuento = '';
      var total = 0;
      if (subtotal >= 0 && subtotal <= 999.99) {
        descuento = 'No aplica descuento';
        total = subtotal;
      } else if (subtotal >= 1000 && subtotal <= 4999.99) {
        descuento = 'Descuento 10%';
        total = subtotal * 0.9;
      } else if (subtotal >= 5000 && subtotal <= 8999.99) {
        descuento = 'Descuento 20%';
        total = subtotal * 0.8;
      } else if (subtotal >= 9000 && subtotal <= 12999.99) {
        descuento = 'Descuento 30%';
        total = subtotal * 0.7;
      } else if (subtotal >= 13000) {
        descuento = 'Descuento 40%';
        total = subtotal * 0.6;
      }
  
     
      $('#subtotal').val(subtotal.toLocaleString('es-HN', {minimumFractionDigits: 2}));
      $('#descuento').val(descuento);
      $('#total').val(total.toLocaleString('es-HN', {minimumFractionDigits: 2}));
    });
  
    $('#limpiarBtn').click(function() {
      $('.form-control').val('');
      $('#descuento').val('');
      $('.alert').remove();
    });
  });
  