export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#home" className="font-display text-lg font-bold gradient-text">Shoxnazar.</a>
        <p className="text-sm text-muted-foreground">
          © 2026 Shoxnazar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
