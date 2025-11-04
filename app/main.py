from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import SQLModel, Session, select
from app.db.session import engine, get_session
from app.models import Building, Zone, Asset

app = FastAPI(title="CFM API", version="0.3.0")

@app.on_event("startup")
def on_startup():
    SQLModel.metadata.create_all(engine)

# CORS for local frontend (Vite @ 5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Health checks ---
@app.get("/health")
def health(): return {"status": "ok"}

@app.get("/db-health")
def db_health(session: Session = Depends(get_session)):
    session.exec(select(Building).limit(1))
    return {"db": "ok"}

# --- Buildings ---
@app.get("/buildings", response_model=list[Building])
def list_buildings(session: Session = Depends(get_session)):
    return session.exec(select(Building)).all()

@app.post("/buildings", response_model=Building)
def create_building(b: Building, session: Session = Depends(get_session)):
    session.add(b); session.commit(); session.refresh(b); return b

@app.put("/buildings/{id}", response_model=Building)
def update_building(id: int, data: Building, session: Session = Depends(get_session)):
    obj = session.get(Building, id)
    if not obj: raise HTTPException(404, "Building not found")
    obj.name, obj.address = data.name, data.address
    session.add(obj); session.commit(); session.refresh(obj); return obj

@app.delete("/buildings/{id}")
def delete_building(id: int, session: Session = Depends(get_session)):
    obj = session.get(Building, id)
    if not obj: raise HTTPException(404, "Building not found")
    session.delete(obj); session.commit(); return {"deleted": id}

# --- Zones ---
@app.get("/zones", response_model=list[Zone])
def list_zones(session: Session = Depends(get_session)):
    return session.exec(select(Zone)).all()

@app.post("/zones", response_model=Zone)
def create_zone(z: Zone, session: Session = Depends(get_session)):
    session.add(z); session.commit(); session.refresh(z); return z

@app.put("/zones/{id}", response_model=Zone)
def update_zone(id: int, data: Zone, session: Session = Depends(get_session)):
    obj = session.get(Zone, id)
    if not obj: raise HTTPException(404, "Zone not found")
    obj.name, obj.level, obj.building_id = data.name, data.level, data.building_id
    session.add(obj); session.commit(); session.refresh(obj); return obj

@app.delete("/zones/{id}")
def delete_zone(id: int, session: Session = Depends(get_session)):
    obj = session.get(Zone, id)
    if not obj: raise HTTPException(404, "Zone not found")
    session.delete(obj); session.commit(); return {"deleted": id}

# --- Assets ---
@app.get("/assets", response_model=list[Asset])
def list_assets(session: Session = Depends(get_session)):
    return session.exec(select(Asset)).all()

@app.post("/assets", response_model=Asset)
def create_asset(a: Asset, session: Session = Depends(get_session)):
    session.add(a); session.commit(); session.refresh(a); return a

@app.put("/assets/{id}", response_model=Asset)
def update_asset(id: int, data: Asset, session: Session = Depends(get_session)):
    obj = session.get(Asset, id)
    if not obj: raise HTTPException(404, "Asset not found")
    obj.name, obj.trade, obj.manufacturer, obj.model, obj.serial, obj.zone_id = \
        data.name, data.trade, data.manufacturer, data.model, data.serial, data.zone_id
    session.add(obj); session.commit(); session.refresh(obj); return obj

@app.delete("/assets/{id}")
def delete_asset(id: int, session: Session = Depends(get_session)):
    obj = session.get(Asset, id)
    if not obj: raise HTTPException(404, "Asset not found")
    session.delete(obj); session.commit(); return {"deleted": id}
