/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 6, 2020
 */

public interface InterfazVista {
  void setControlador(ControlConversor c);
  void arranca();
  double getCantidad();
  void escribeCambio(String s); //texto con la conversión
  // Constantes que definen las posibles operaciones:
  static final String AEUROS="Pesetas a Euros";
  static final String APESETAS="Euros a Pesetas";
}

