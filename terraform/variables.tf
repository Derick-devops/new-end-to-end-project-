variable "aws_region" {
  description = "AWS Region where the infrastructure will be deployed"
  type        = string
  default     = "eu-north-1"
}
variable "project_name" {
  description = "name of the application"
  type        = string
  default     = "todo-app"
}
variable "vpc_cidr" {
  description = "CIDR for the vpc"
  type        = string
  default     = "10.0.0.0/16"
}
variable "public_subnet_cidr" {
  description = "IP for the public subnet"
  type        = string
  default     = "10.0.1.0/24"
}
variable "private_subnet_cidr" {
  description = "IP for private subnet"
  type        = string
  default     = "10.0.2.0/24"
}

variable "ec2_key_name" {
  description = "Existing AWS EC2 key pair name"
  type        = string
  default     = "todo-app-dev-key"
}