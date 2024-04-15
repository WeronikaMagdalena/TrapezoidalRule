/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 6, 2020
 */

//import java.awt.*;
import java.awt.event.*;
import java.io.BufferedReader;
import java.io.InputStreamReader;


public class ControlConversor implements ActionListener {
	private InterfazVista vista;
	private ConversorEurosPesetas modelo;
	public ControlConversor(InterfazVista vista, ConversorEurosPesetas modelo) {
		this.vista = vista;
		this.modelo = modelo;
	}
	public void actionPerformed(ActionEvent evento) {
		double cantidad = vista.getCantidad();
		if ( evento.getActionCommand().equals(InterfazVista.AEUROS) ) {
			vista.escribeCambio( cantidad + " pesetas son: "
			+ modelo.pesetasAeuros(cantidad) + " euros" );
		}
		else if ( evento.getActionCommand().equals(InterfazVista.APESETAS)) {
			vista.escribeCambio( cantidad + " euros son: "
			+ modelo.eurosApesetas(cantidad) + " pesetas" );
		}
		else
			vista.escribeCambio( "ERROR" );
	}
}




