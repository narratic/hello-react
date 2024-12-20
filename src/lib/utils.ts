import { clsx, type ClassValue } from "clsx";
import { FileText, User, Users, Award, Zap, Crosshair, Target } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getLanguageName(languageCode: string): string {
    switch (languageCode) {
        case "en":
            return "English";
        case "es":
            return "Spanish";
        case "fr":
            return "French";
        case "de":
            return "German";
        default:
            return "Unknown";
    }
}

export function getMEDDPICCIcon(category: string) {
    switch (category) {
        case "metrics":
            return Target;
        case "economicBuyer":
            return User;
        case "decisionCriteria":
            return FileText;
        case "decisionProcess":
            return Users;
        case "paperProcess":
            return FileText;
        case "identifyPain":
            return Zap;
        case "champion":
            return Award;
        case "competition":
            return Crosshair;
        default:
            return null;
    }
}
