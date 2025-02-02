"""empty message

Revision ID: 3e541ca1d0af
Revises: 
Create Date: 2022-12-12 16:25:30.391524

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3e541ca1d0af'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('cocktail',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=300), nullable=True),
    sa.Column('image', sa.String(length=400), nullable=True),
    sa.Column('alcohol_content', sa.String(length=300), nullable=True),
    sa.Column('first_step', sa.String(length=300), nullable=True),
    sa.Column('second_step', sa.String(length=300), nullable=True),
    sa.Column('third_step', sa.String(length=300), nullable=True),
    sa.Column('fourth_step', sa.String(length=300), nullable=True),
    sa.Column('fifth_step', sa.String(length=300), nullable=True),
    sa.Column('first_ingredient', sa.String(length=300), nullable=True),
    sa.Column('second_ingredient', sa.String(length=300), nullable=True),
    sa.Column('third_ingredient', sa.String(length=300), nullable=True),
    sa.Column('fourth_ingredient', sa.String(length=300), nullable=True),
    sa.Column('fifth_ingredient', sa.String(length=300), nullable=True),
    sa.Column('first_measurement', sa.String(length=300), nullable=True),
    sa.Column('second_measurement', sa.String(length=300), nullable=True),
    sa.Column('third_measurement', sa.String(length=300), nullable=True),
    sa.Column('fourth_measurement', sa.String(length=300), nullable=True),
    sa.Column('fifth_measurement', sa.String(length=300), nullable=True),
    sa.Column('garnish', sa.String(length=300), nullable=True),
    sa.Column('glassware', sa.String(length=300), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=300), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('first_name', sa.String(length=300), nullable=False),
    sa.Column('last_name', sa.String(length=300), nullable=False),
    sa.Column('date', sa.String(length=300), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('favorite_cocktail',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('cocktail_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['cocktail_id'], ['cocktail.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('favorite_cocktail')
    op.drop_table('user')
    op.drop_table('cocktail')
    # ### end Alembic commands ###
