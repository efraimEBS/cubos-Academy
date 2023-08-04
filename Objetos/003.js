function solucao(altitude) {
    if (altitude <= 20) {
        return "TROPOSFERA";
    }

    if (altitude > 20 && altitude <= 50) {
        return "ESTRATOSFERA";
    }

    if (altitude > 50 && altitude <= 80) {
        return "MESOSFERA";
    }

    if (altitude > 80 && altitude <= 450) {
        return "TERMOSFERA";
    }

    if (altitude > 450 && altitude <= 900) {
        return "EXOSFERA";
    }
}
