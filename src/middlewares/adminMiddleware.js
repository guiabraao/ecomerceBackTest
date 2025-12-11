export function adminMiddleware(req, res, next) {
    if (req.user.role !== "admin") {
        return res.status(403).json({ text: "Acesso negado: somente administradores!" });
    }
    next();
}
