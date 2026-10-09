output "vpc_id" {
  description = "ID of the application VPC"
  value       = aws_vpc.main.id
}

output "public_subnet_id" {
  description = "ID of the public subnet"
  value       = aws_subnet.public.id
}

output "private_subnet_id" {
  description = "ID of the private subnet"
  value       = aws_subnet.private.id
}

output "frontend_ecr_repository_url" {
  description = "ECR repository URL for the frontend"
  value       = aws_ecr_repository.frontend.repository_url
}

output "backend_ecr_repository_url" {
  description = "ECR repository URL for the backend"
  value       = aws_ecr_repository.backend.repository_url
}

output "control_plane_public_ip" {
  description = "Public IP address of the Kubernetes control plane"
  value       = aws_instance.control_plane.public_ip
}

output "control_plane_private_ip" {
  description = "Private IP address of the Kubernetes control plane"
  value       = aws_instance.control_plane.private_ip
}

output "worker_public_ip" {
  description = "Public IP address of the Kubernetes worker"
  value       = aws_instance.worker.public_ip
}

output "worker_private_ip" {
  description = "Private IP address of the Kubernetes worker"
  value       = aws_instance.worker.private_ip
}