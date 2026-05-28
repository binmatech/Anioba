import React from "react";
import { 
  Zap, 
  Sun, 
  Cpu, 
  HardHat, 
  Briefcase, 
  ShieldCheck, 
  Award, 
  Sliders, 
  Users, 
  Activity, 
  Wrench, 
  MessageSquare, 
  Compass, 
  Play, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Star, 
  Check, 
  ExternalLink, 
  MessageCircle, 
  FileText, 
  ChevronRight, 
  ChevronLeft
} from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number | string;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ name, className = "", size }) => {
  switch (name) {
    case "Zap":
      return <Zap className={className} size={size} />;
    case "Sun":
      return <Sun className={className} size={size} />;
    case "Cpu":
      return <Cpu className={className} size={size} />;
    case "HardHat":
      return <HardHat className={className} size={size} />;
    case "Briefcase":
      return <Briefcase className={className} size={size} />;
    case "ShieldCheck":
      return <ShieldCheck className={className} size={size} />;
    case "Award":
      return <Award className={className} size={size} />;
    case "Sliders":
      return <Sliders className={className} size={size} />;
    case "Users":
      return <Users className={className} size={size} />;
    case "Activity":
      return <Activity className={className} size={size} />;
    case "Wrench":
      return <Wrench className={className} size={size} />;
    case "MessageSquare":
      return <MessageSquare className={className} size={size} />;
    case "Compass":
      return <Compass className={className} size={size} />;
    case "Play":
      return <Play className={className} size={size} />;
    case "CheckCircle2":
      return <CheckCircle2 className={className} size={size} />;
    case "ArrowRight":
      return <ArrowRight className={className} size={size} />;
    case "Phone":
      return <Phone className={className} size={size} />;
    case "Mail":
      return <Mail className={className} size={size} />;
    case "MapPin":
      return <MapPin className={className} size={size} />;
    case "Menu":
      return <Menu className={className} size={size} />;
    case "X":
      return <X className={className} size={size} />;
    case "Star":
      return <Star className={className} size={size} />;
    case "Check":
      return <Check className={className} size={size} />;
    case "ExternalLink":
      return <ExternalLink className={className} size={size} />;
    case "MessageCircle":
      return <MessageCircle className={className} size={size} />;
    case "FileText":
      return <FileText className={className} size={size} />;
    case "ChevronRight":
      return <ChevronRight className={className} size={size} />;
    case "ChevronLeft":
      return <ChevronLeft className={className} size={size} />;
    default:
      // Fallback
      return <Zap className={className} size={size} />;
  }
};
