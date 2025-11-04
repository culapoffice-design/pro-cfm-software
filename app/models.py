from typing import Optional, List
from sqlmodel import SQLModel, Field, Relationship

class Zone(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    level: str = ""
    building_id: Optional[int] = Field(default=None, foreign_key="building.id")

    building: Optional["Building"] = Relationship(back_populates="zones")
    assets: List["Asset"] = Relationship(back_populates="zone")

class Building(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    address: str = ""
    zones: List[Zone] = Relationship(back_populates="building")

class Asset(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    trade: str = ""
    manufacturer: str = ""
    model: str = ""
    serial: str = ""
    zone_id: Optional[int] = Field(default=None, foreign_key="zone.id")

    zone: Optional[Zone] = Relationship(back_populates="assets")
