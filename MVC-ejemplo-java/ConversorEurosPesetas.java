/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 6, 2020
 */

public class ConversorEurosPesetas extends ConversorEuros {
// Adaptador de clase
  public ConversorEurosPesetas () {
    super(166.386D);
  }
  public double eurosApesetas(double cantidad) {
    return eurosAmoneda(cantidad);
  }
  public double pesetasAeuros(double cantidad) {
    return monedaAeuros(cantidad);
  }
}

