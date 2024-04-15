/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 6, 2020
 */

public class ConversorEuros {
  private double cambio;
  public ConversorEuros ( double valorCambio ) {
    // valor en la moneda de 1 euro
    cambio = valorCambio;
  }
  public double eurosAmoneda (double cantidad) {
    return cantidad * cambio;
  }
  public double monedaAeuros (double cantidad) {
    return cantidad / cambio;
  }
}

