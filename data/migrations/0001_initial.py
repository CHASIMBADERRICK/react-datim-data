# Generated by Django 4.0.2 on 2022-02-28 13:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='React',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('indicator', models.CharField(max_length=100)),
                ('county', models.CharField(max_length=100)),
                ('period_from', models.CharField(max_length=100)),
                ('period_to', models.CharField(max_length=100)),
            ],
        ),
    ]