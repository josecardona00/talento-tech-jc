export default function Widget() {
    return (
        
        
        <div className="container mx-auto p-6">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary">Proyectos de Energía Renovable</h1>
          </header>
        
          <nav className="flex justify-center space-x-4 mb-6">
            <a href="#wind" className="bg-secondary text-secondary-foreground p-2 rounded hover:bg-secondary/80">Energía Eólica</a>
            <a href="#hydraulic" className="bg-secondary text-secondary-foreground p-2 rounded hover:bg-secondary/80">Energía Hidráulica</a>
            <a href="#solar" className="bg-secondary text-secondary-foreground p-2 rounded hover:bg-secondary/80">Energía Solar</a>
          </nav>
        
          <section id="wind" className="mb-12">
            <h2 className="text-2xl font-semibold text-primary">Energía Eólica</h2>
            <img src="https://placehold.co/600x400?text=Wind+Energy" alt="Energía Eólica" className="w-full rounded-lg mb-4" />
            <p className="text-muted-foreground">La energía eólica es una fuente de energía renovable que utiliza el viento para generar electricidad. Es limpia y sostenible.</p>
            <div class="mt-4">
        <h3 class="text-lg font-semibold">Producto</h3>
        <div class="bg-card p-4 rounded-lg">
          <div class="product-image">Añadir imagen del producto</div>
          <p class="text-primary">Turbina Eólica de 5kW</p>
          <button class="bg-primary text-primary-foreground p-2 rounded mt-2">Comprar</button>
        </div>
      </div>

          </section>
        
          <section id="hydraulic" className="mb-12">
            <h2 className="text-2xl font-semibold text-primary">Energía Hidráulica</h2>
            <img src="https://placehold.co/600x400?text=Hydraulic+Energy" alt="Energía Hidráulica" className="w-full rounded-lg mb-4" />
            <p className="text-muted-foreground">La energía hidráulica aprovecha el movimiento del agua para generar electricidad, siendo una de las fuentes más antiguas de energía renovable.</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Producto</h3>
              <div className="bg-card p-4 rounded-lg">
                <p className="text-primary">Sistema de Generación Hidráulica</p>
                <button className="bg-primary text-primary-foreground p-2 rounded mt-2">Comprar</button>
              </div>
            </div>
          </section>
        
          <section id="solar">
            <h2 className="text-2xl font-semibold text-primary">Energía Solar</h2>
            <img src="https://placehold.co/600x400?text=Solar+Energy" alt="Energía Solar" className="w-full rounded-lg mb-4" />
            <p className="text-muted-foreground">La energía solar utiliza la radiación solar para generar electricidad, siendo una de las fuentes más limpias y abundantes.</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Producto</h3>
              <div className="bg-card p-4 rounded-lg">
                <p className="text-primary">Panel Solar de 300W</p>
                <button className="bg-primary text-primary-foreground p-2 rounded mt-2">Comprar</button>
              </div>
            </div>
          </section>
        </div>
        
        
    )
}