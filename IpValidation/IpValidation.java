/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package testing;

/**
 *
 * @author VC
 */
public class IpValidation {

    public static boolean validate(String ipAddress) {
        String ip[] = ipAddress.split("[.]", 0);

        if (ip.length != 4) {
            return false;
        }
        if (ip[3].equals("0") || ip[3].equals("255")) {
            return false;
        }
        for (int i = 0; i < ip.length; i++) {
            if (!ip[i].matches("[0-9]+")) {
                return false;
            }
            if (Integer.parseInt(ip[i]) < 0 || Integer.parseInt(ip[i]) > 255) {
                return false;
            }
        }

        return true;
    }
}
